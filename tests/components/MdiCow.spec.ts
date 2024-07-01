
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCow from "../../src/components/MdiCow.vue";

test("MdiCow snapshot", () => {
  const wrapper = mount(MdiCow, {});
  expect(wrapper.html()).toMatchSnapshot();
});
