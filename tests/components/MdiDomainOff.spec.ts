
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiDomainOff from "../../src/components/MdiDomainOff.vue";

test("MdiDomainOff snapshot", () => {
  const wrapper = mount(MdiDomainOff, {});
  expect(wrapper.html()).toMatchSnapshot();
});
