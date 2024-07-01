
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAccessPointRemove from "../../src/components/MdiAccessPointRemove.vue";

test("MdiAccessPointRemove snapshot", () => {
  const wrapper = mount(MdiAccessPointRemove, {});
  expect(wrapper.html()).toMatchSnapshot();
});
