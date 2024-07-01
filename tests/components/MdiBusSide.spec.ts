
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBusSide from "../../src/components/MdiBusSide.vue";

test("MdiBusSide snapshot", () => {
  const wrapper = mount(MdiBusSide, {});
  expect(wrapper.html()).toMatchSnapshot();
});
