
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCloudRefresh from "../../src/components/MdiCloudRefresh.vue";

test("MdiCloudRefresh snapshot", () => {
  const wrapper = mount(MdiCloudRefresh, {});
  expect(wrapper.html()).toMatchSnapshot();
});
