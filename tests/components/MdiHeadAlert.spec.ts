
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiHeadAlert from "../../src/components/MdiHeadAlert.vue";

test("MdiHeadAlert snapshot", () => {
  const wrapper = mount(MdiHeadAlert, {});
  expect(wrapper.html()).toMatchSnapshot();
});
