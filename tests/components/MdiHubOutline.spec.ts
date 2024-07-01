
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiHubOutline from "../../src/components/MdiHubOutline.vue";

test("MdiHubOutline snapshot", () => {
  const wrapper = mount(MdiHubOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
