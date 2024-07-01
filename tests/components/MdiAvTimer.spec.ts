
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAvTimer from "../../src/components/MdiAvTimer.vue";

test("MdiAvTimer snapshot", () => {
  const wrapper = mount(MdiAvTimer, {});
  expect(wrapper.html()).toMatchSnapshot();
});
