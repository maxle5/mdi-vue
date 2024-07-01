
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiVirusOffOutline from "../../src/components/MdiVirusOffOutline.vue";

test("MdiVirusOffOutline snapshot", () => {
  const wrapper = mount(MdiVirusOffOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
