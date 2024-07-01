
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiUnicycle from "../../src/components/MdiUnicycle.vue";

test("MdiUnicycle snapshot", () => {
  const wrapper = mount(MdiUnicycle, {});
  expect(wrapper.html()).toMatchSnapshot();
});
