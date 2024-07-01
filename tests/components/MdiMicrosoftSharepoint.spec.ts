
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMicrosoftSharepoint from "../../src/components/MdiMicrosoftSharepoint.vue";

test("MdiMicrosoftSharepoint snapshot", () => {
  const wrapper = mount(MdiMicrosoftSharepoint, {});
  expect(wrapper.html()).toMatchSnapshot();
});
