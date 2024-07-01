
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiHeadOutline from "../../src/components/MdiHeadOutline.vue";

test("MdiHeadOutline snapshot", () => {
  const wrapper = mount(MdiHeadOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
