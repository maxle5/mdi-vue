
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCloudLock from "../../src/components/MdiCloudLock.vue";

test("MdiCloudLock snapshot", () => {
  const wrapper = mount(MdiCloudLock, {});
  expect(wrapper.html()).toMatchSnapshot();
});
