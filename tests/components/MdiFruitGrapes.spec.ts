
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFruitGrapes from "../../src/components/MdiFruitGrapes.vue";

test("MdiFruitGrapes snapshot", () => {
  const wrapper = mount(MdiFruitGrapes, {});
  expect(wrapper.html()).toMatchSnapshot();
});
