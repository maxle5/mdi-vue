
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiEmailFast from "../../src/components/MdiEmailFast.vue";

test("MdiEmailFast snapshot", () => {
  const wrapper = mount(MdiEmailFast, {});
  expect(wrapper.html()).toMatchSnapshot();
});
