
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiDebian from "../../src/components/MdiDebian.vue";

test("MdiDebian snapshot", () => {
  const wrapper = mount(MdiDebian, {});
  expect(wrapper.html()).toMatchSnapshot();
});
