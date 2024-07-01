
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMopedOutline from "../../src/components/MdiMopedOutline.vue";

test("MdiMopedOutline snapshot", () => {
  const wrapper = mount(MdiMopedOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
