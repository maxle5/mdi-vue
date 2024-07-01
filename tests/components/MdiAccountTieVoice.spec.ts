
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAccountTieVoice from "../../src/components/MdiAccountTieVoice.vue";

test("MdiAccountTieVoice snapshot", () => {
  const wrapper = mount(MdiAccountTieVoice, {});
  expect(wrapper.html()).toMatchSnapshot();
});
