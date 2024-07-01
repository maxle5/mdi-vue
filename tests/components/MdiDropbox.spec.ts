
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiDropbox from "../../src/components/MdiDropbox.vue";

test("MdiDropbox snapshot", () => {
  const wrapper = mount(MdiDropbox, {});
  expect(wrapper.html()).toMatchSnapshot();
});
