
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSmokingPipeOff from "../../src/components/MdiSmokingPipeOff.vue";

test("MdiSmokingPipeOff snapshot", () => {
  const wrapper = mount(MdiSmokingPipeOff, {});
  expect(wrapper.html()).toMatchSnapshot();
});
