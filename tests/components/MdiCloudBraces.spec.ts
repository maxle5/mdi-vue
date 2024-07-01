
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCloudBraces from "../../src/components/MdiCloudBraces.vue";

test("MdiCloudBraces snapshot", () => {
  const wrapper = mount(MdiCloudBraces, {});
  expect(wrapper.html()).toMatchSnapshot();
});
