
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTimelineAlert from "../../src/components/MdiTimelineAlert.vue";

test("MdiTimelineAlert snapshot", () => {
  const wrapper = mount(MdiTimelineAlert, {});
  expect(wrapper.html()).toMatchSnapshot();
});
