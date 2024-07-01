
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiKickstarter from "../../src/components/MdiKickstarter.vue";

test("MdiKickstarter snapshot", () => {
  const wrapper = mount(MdiKickstarter, {});
  expect(wrapper.html()).toMatchSnapshot();
});
