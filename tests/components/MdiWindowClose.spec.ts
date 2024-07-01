
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiWindowClose from "../../src/components/MdiWindowClose.vue";

test("MdiWindowClose snapshot", () => {
  const wrapper = mount(MdiWindowClose, {});
  expect(wrapper.html()).toMatchSnapshot();
});
