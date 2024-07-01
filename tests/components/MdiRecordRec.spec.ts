
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiRecordRec from "../../src/components/MdiRecordRec.vue";

test("MdiRecordRec snapshot", () => {
  const wrapper = mount(MdiRecordRec, {});
  expect(wrapper.html()).toMatchSnapshot();
});
