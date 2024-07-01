
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAccountVoice from "../../src/components/MdiAccountVoice.vue";

test("MdiAccountVoice snapshot", () => {
  const wrapper = mount(MdiAccountVoice, {});
  expect(wrapper.html()).toMatchSnapshot();
});
