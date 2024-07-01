
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiListStatus from "../../src/components/MdiListStatus.vue";

test("MdiListStatus snapshot", () => {
  const wrapper = mount(MdiListStatus, {});
  expect(wrapper.html()).toMatchSnapshot();
});
