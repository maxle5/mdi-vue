
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCloudKey from "../../src/components/MdiCloudKey.vue";

test("MdiCloudKey snapshot", () => {
  const wrapper = mount(MdiCloudKey, {});
  expect(wrapper.html()).toMatchSnapshot();
});
