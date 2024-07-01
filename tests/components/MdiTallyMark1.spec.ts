
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTallyMark1 from "../../src/components/MdiTallyMark1.vue";

test("MdiTallyMark1 snapshot", () => {
  const wrapper = mount(MdiTallyMark1, {});
  expect(wrapper.html()).toMatchSnapshot();
});
