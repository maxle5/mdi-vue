
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPassport from "../../src/components/MdiPassport.vue";

test("MdiPassport snapshot", () => {
  const wrapper = mount(MdiPassport, {});
  expect(wrapper.html()).toMatchSnapshot();
});
