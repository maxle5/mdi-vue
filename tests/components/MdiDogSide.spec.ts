
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiDogSide from "../../src/components/MdiDogSide.vue";

test("MdiDogSide snapshot", () => {
  const wrapper = mount(MdiDogSide, {});
  expect(wrapper.html()).toMatchSnapshot();
});
