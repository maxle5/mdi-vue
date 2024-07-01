
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTeamviewer from "../../src/components/MdiTeamviewer.vue";

test("MdiTeamviewer snapshot", () => {
  const wrapper = mount(MdiTeamviewer, {});
  expect(wrapper.html()).toMatchSnapshot();
});
