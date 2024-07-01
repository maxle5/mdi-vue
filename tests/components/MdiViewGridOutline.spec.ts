
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiViewGridOutline from "../../src/components/MdiViewGridOutline.vue";

test("MdiViewGridOutline snapshot", () => {
  const wrapper = mount(MdiViewGridOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
