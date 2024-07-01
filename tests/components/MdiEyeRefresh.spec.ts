
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiEyeRefresh from "../../src/components/MdiEyeRefresh.vue";

test("MdiEyeRefresh snapshot", () => {
  const wrapper = mount(MdiEyeRefresh, {});
  expect(wrapper.html()).toMatchSnapshot();
});
