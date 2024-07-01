
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiVirusOff from "../../src/components/MdiVirusOff.vue";

test("MdiVirusOff snapshot", () => {
  const wrapper = mount(MdiVirusOff, {});
  expect(wrapper.html()).toMatchSnapshot();
});
