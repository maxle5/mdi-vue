
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTallyMark4 from "../../src/components/MdiTallyMark4.vue";

test("MdiTallyMark4 snapshot", () => {
  const wrapper = mount(MdiTallyMark4, {});
  expect(wrapper.html()).toMatchSnapshot();
});
