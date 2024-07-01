
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiGaugeFull from "../../src/components/MdiGaugeFull.vue";

test("MdiGaugeFull snapshot", () => {
  const wrapper = mount(MdiGaugeFull, {});
  expect(wrapper.html()).toMatchSnapshot();
});
