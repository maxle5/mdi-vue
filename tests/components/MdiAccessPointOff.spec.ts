
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAccessPointOff from "../../src/components/MdiAccessPointOff.vue";

test("MdiAccessPointOff snapshot", () => {
  const wrapper = mount(MdiAccessPointOff, {});
  expect(wrapper.html()).toMatchSnapshot();
});
