
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiDomainPlus from "../../src/components/MdiDomainPlus.vue";

test("MdiDomainPlus snapshot", () => {
  const wrapper = mount(MdiDomainPlus, {});
  expect(wrapper.html()).toMatchSnapshot();
});
