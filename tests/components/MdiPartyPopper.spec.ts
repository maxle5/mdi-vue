
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPartyPopper from "../../src/components/MdiPartyPopper.vue";

test("MdiPartyPopper snapshot", () => {
  const wrapper = mount(MdiPartyPopper, {});
  expect(wrapper.html()).toMatchSnapshot();
});
