
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiRefreshAuto from "../../src/components/MdiRefreshAuto.vue";

test("MdiRefreshAuto snapshot", () => {
  const wrapper = mount(MdiRefreshAuto, {});
  expect(wrapper.html()).toMatchSnapshot();
});
