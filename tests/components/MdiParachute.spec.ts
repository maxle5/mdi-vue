
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiParachute from "../../src/components/MdiParachute.vue";

test("MdiParachute snapshot", () => {
  const wrapper = mount(MdiParachute, {});
  expect(wrapper.html()).toMatchSnapshot();
});
