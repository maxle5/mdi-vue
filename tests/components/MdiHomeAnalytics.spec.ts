
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiHomeAnalytics from "../../src/components/MdiHomeAnalytics.vue";

test("MdiHomeAnalytics snapshot", () => {
  const wrapper = mount(MdiHomeAnalytics, {});
  expect(wrapper.html()).toMatchSnapshot();
});
