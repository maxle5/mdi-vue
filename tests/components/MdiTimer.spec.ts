
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTimer from "../../src/components/MdiTimer.vue";

test("MdiTimer snapshot", () => {
  const wrapper = mount(MdiTimer, {});
  expect(wrapper.html()).toMatchSnapshot();
});
