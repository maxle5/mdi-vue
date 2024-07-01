
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiRecordPlayer from "../../src/components/MdiRecordPlayer.vue";

test("MdiRecordPlayer snapshot", () => {
  const wrapper = mount(MdiRecordPlayer, {});
  expect(wrapper.html()).toMatchSnapshot();
});
