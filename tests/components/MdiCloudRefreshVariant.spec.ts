
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCloudRefreshVariant from "../../src/components/MdiCloudRefreshVariant.vue";

test("MdiCloudRefreshVariant snapshot", () => {
  const wrapper = mount(MdiCloudRefreshVariant, {});
  expect(wrapper.html()).toMatchSnapshot();
});
