
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiGaugeLow from "../../src/components/MdiGaugeLow.vue";

test("MdiGaugeLow snapshot", () => {
  const wrapper = mount(MdiGaugeLow, {});
  expect(wrapper.html()).toMatchSnapshot();
});
