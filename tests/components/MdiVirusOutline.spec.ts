
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiVirusOutline from "../../src/components/MdiVirusOutline.vue";

test("MdiVirusOutline snapshot", () => {
  const wrapper = mount(MdiVirusOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
