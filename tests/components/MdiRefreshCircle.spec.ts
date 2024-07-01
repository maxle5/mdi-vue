
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiRefreshCircle from "../../src/components/MdiRefreshCircle.vue";

test("MdiRefreshCircle snapshot", () => {
  const wrapper = mount(MdiRefreshCircle, {});
  expect(wrapper.html()).toMatchSnapshot();
});
