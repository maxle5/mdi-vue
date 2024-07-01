
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCloudSync from "../../src/components/MdiCloudSync.vue";

test("MdiCloudSync snapshot", () => {
  const wrapper = mount(MdiCloudSync, {});
  expect(wrapper.html()).toMatchSnapshot();
});
