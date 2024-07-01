
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiLeafCircleOutline from "../../src/components/MdiLeafCircleOutline.vue";

test("MdiLeafCircleOutline snapshot", () => {
  const wrapper = mount(MdiLeafCircleOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
