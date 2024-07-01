
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTallyMark3 from "../../src/components/MdiTallyMark3.vue";

test("MdiTallyMark3 snapshot", () => {
  const wrapper = mount(MdiTallyMark3, {});
  expect(wrapper.html()).toMatchSnapshot();
});
