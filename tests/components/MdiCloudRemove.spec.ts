
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCloudRemove from "../../src/components/MdiCloudRemove.vue";

test("MdiCloudRemove snapshot", () => {
  const wrapper = mount(MdiCloudRemove, {});
  expect(wrapper.html()).toMatchSnapshot();
});
